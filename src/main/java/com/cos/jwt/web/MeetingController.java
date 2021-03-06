package com.cos.jwt.web;




import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.board2.Meeting;
import com.cos.jwt.domain.board2.MeetingMember;
import com.cos.jwt.domain.board2.MeetingMemberRepository;
import com.cos.jwt.domain.board2.MeetingRepository;
import com.cos.jwt.domain.board2.PageInfo;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
public class MeetingController {
	
	private final MeetingRepository mtRepository;
	private final MeetingMemberRepository mtmRepository;
	
	//리스트출력 추후 페이징추가해서 그걸로 바꿀거.
	@GetMapping("/board2/{page}")
//	public List<Meeting> mtList() {
	public List<Meeting> mtList(@PathVariable int page) {
		int page2 = 6;
		page = (page-1)*6;
		return mtRepository.mPageList(page,page2);
//		return mtRepository.mList();
	}
	
	@GetMapping("/board2/count")
	public int mtPageCount() {
		List<Meeting> page = mtRepository.mList();
		System.out.println("갯수 : "+page.size());
		return page.size();
	}
	
	
	//게시글 등록
	@PostMapping("/board2")
	public String mtInsert(@RequestBody Meeting meeting) {
		try {
			mtRepository.save(meeting);
			return "등록완료";
//			return "redirect:/board2";
		} catch (Exception e) {
			return "등록실패";
		}
	}
	
	//id로 해당게시글값 받아 찾고 참여 인원 추가 
	//로그인완료되면 닉네임값도 받아오게추가할것.
	@PutMapping("/board2/{id}")
	public void mtmInsert(@PathVariable int id,String name) {
		mtmRepository.mInsertMember(name, id);
	}
	
	//member 삭제
	@DeleteMapping("/board2/{id}")
	public void mtmDelete(@PathVariable int id,String name) {
		mtmRepository.mDeleteMember(name, id);
	}
	
	
	//생각해보니 이거 잘못됐네. meeting에서 현재인원 올라가야되니 결국 meeting타고 meetingmember 생성해야함.
//	@PostMapping("/board2/mList/")
//	public String mtmInsert(@RequestBody MeetingMember mtm) {
//		mtmRepository.save(mtm);
//		return "참가완료";
//	}
	
	
	@GetMapping("/board2/mList/{id}")
	public List<String> mtmList(@PathVariable int id) {
		return mtmRepository.mList(id);
	}
	
	

}
