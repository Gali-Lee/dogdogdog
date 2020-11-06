package com.cos.jwt.web;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.DTO.LocationDTO;
import com.cos.jwt.domain.board1.Board1;
import com.cos.jwt.domain.board1.Board1Repository;
import com.cos.jwt.domain.board3.Board3;
import com.cos.jwt.domain.board3.Board3Repository;
import com.cos.jwt.domain.user.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class Board1Controller {

	private final Board1Repository board1Repository;
	private final HttpSession session;

	private String 이미지저장(MultipartFile file) throws IllegalStateException, IOException {
		File path = new File("");// 상대경로 찾을려고 임의로 기본 파일주소를 찍어봄
		String uploadFolder = path.getAbsolutePath() + "\\src\\main\\webapp\\find-dog\\public\\images"; // 거기에 images
																										// 폴더로 설정
		File uploadPath = new File(uploadFolder/* , getFolder() */);// 여기에 설정
		if (uploadPath.exists() == false) {// 없을 때 images 폴더 설정
			uploadPath.mkdirs();
		}
		UUID uuid = UUID.randomUUID();
		String uploadFileName = uuid.toString() + "-" + file.getOriginalFilename();
		File saveFile = new File(uploadPath, uploadFileName);
		file.transferTo(saveFile);
		return uploadFileName;
	}

	@PostMapping(value = "/board1/write", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 글쓰기(@RequestParam("catagory") String catagory, @RequestParam("name") String name,
			@RequestParam("bread") String bread, @RequestParam("age") String age, @RequestParam("sex") String sex,
			@RequestParam("place") String place, @RequestParam("lat") double lat, @RequestParam("lng") double lng,
			@RequestParam("content") String content, @RequestParam("type") String type,
			@RequestParam("property") String property, @RequestParam("date") String date,
			@RequestParam("image1") MultipartFile image1, @RequestParam("image2") MultipartFile image2)
			throws IllegalStateException, IOException {
		
		System.out.println("실종/제보 글쓰기");
		
		String image1name = 이미지저장(image1);
		String image2name = 이미지저장(image2);
		
		User principal = (User)session.getAttribute("principal");
	
		Board1 board1 = new Board1().builder().catagory(catagory).name(name).bread(bread).age(age).sex(sex).place(place)
				.date(date).lat(lat).user(principal).lng(lng).type(type).property(property).content(content)
				.image1(image1name).image2(image2name).build();

		board1Repository.save(board1);
		return "ok";
	}

	@GetMapping("/board1")
	public List<Board1> 글목록() {
		System.out.println("실종/제보 글목록");
		return board1Repository.findAll();
	}

	@GetMapping("/board1/{board1Id}")
	public Board1 글상세(@PathVariable int board3Id) {
		System.out.println("실종/제보 상세글");
		Board1 board1 = board1Repository.findById(board3Id).get();
		return board1;
	}

	@Transactional
	@PutMapping("/board1/modify/{board1Id}")
	@ResponseBody
	public String 글수정(@PathVariable int board1Id, @RequestBody Board1 board1) {

		System.out.println("실종/제보 글 수정하기");
		Board1 board1Entity = board1Repository.findById(board1Id).get();

		board1Entity.setCatagory(board1.getCatagory());
		board1Entity.setName(board1.getName());
		board1Entity.setBread(board1.getBread());
		board1Entity.setAge(board1.getAge());
		board1Entity.setType(board1.getType());
		board1Entity.setSex(board1.getSex());
		board1Entity.setPlace(board1.getPlace());
		board1Entity.setContent(board1.getContent());
		board1Entity.setImage1(board1.getImage1());
		board1Entity.setImage1(board1.getImage1());
		board1Entity.setDate(board1.getDate());
		board1Entity.setProperty(board1.getProperty());

		return "ok";
	}

	@Transactional
	@DeleteMapping("/board1/delete/{board1Id}")
	@ResponseBody
	public String 글삭제(@PathVariable int board1Id) {
		board1Repository.deleteById(board1Id);
		return "ok";
	}

//	@GetMapping("/board4")
//	public List<Board3> 지도목록() {
//		System.out.println("지도 목록 검색");
//		return board3Repository.findAll();
//	}
//	@GetMapping("/board4/{id}")
//	public Board1 지도글(@PathVariable int id) {
//		System.out.println("지도글");
//		Board1 board1 = board1Repository.findById(id).get();
//		return board1;
//	}
}
