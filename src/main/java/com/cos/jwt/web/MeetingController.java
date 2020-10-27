package com.cos.jwt.web;



import java.io.Console;
import java.util.List;

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

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
public class MeetingController {
	
	private final MeetingRepository mtRepository;
	private final MeetingMemberRepository mtmRepository;
	
	//리스트출력
	@GetMapping("/board2") 
	public List<Meeting> mtList() {
		return mtRepository.findAll();
	}
	
	//게시글 등록(추가 처리필요)
	@PostMapping("/board2")
	public String mtInsert(@RequestBody Meeting meeting) {
		try {
			mtRepository.save(meeting);
			return "true";
		} catch (Exception e) {
			return "false";
		}
	}
	
	//id로 해당게시글값 받아 찾고 추가인원 출력.
	@PutMapping("/board2/{id}")
	public void mtMember(@PathVariable int id) {
		Meeting mt = mtRepository.findById(id).get();
//		List<MeetingMember> mtList;
//		mtmRepository.save(entity)
//		mt.setMtList(mtList);
		
	}
	
	@GetMapping("/board2/{id}")
	public Meeting mtMemberList(@PathVariable int id) {
		System.out.println("이거 아이  ㅇㅇ!!" + id);
		return mtRepository.findById(id).get();
	}
	@GetMapping("/board2/mList/{id}")
	public List<String> mtmList(@PathVariable int id) {
		System.out.println("mem리스트");
		return mtmRepository.mList(id);
	}

}
