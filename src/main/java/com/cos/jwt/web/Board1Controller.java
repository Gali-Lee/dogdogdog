package com.cos.jwt.web;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.board1.Board1;
import com.cos.jwt.domain.board1.Board1Repository;
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
	public String 글쓰기(@RequestParam("catagory") String catagory,
			@RequestParam("title") String title,
			@RequestParam("place") String place, @RequestParam("lat") double lat, @RequestParam("lng") double lng,
			@RequestParam("content") String content,
			@RequestParam("image1") MultipartFile image1, @RequestParam("image2") MultipartFile image2)
			throws IllegalStateException, IOException {
		
		System.out.println("실종/제보 글쓰기");
		
		String image1name = 이미지저장(image1);
		String image2name = 이미지저장(image2);
		
		User principal = (User)session.getAttribute("principal");
	
		Board1 board1 = new Board1().builder().catagory(catagory).title(title).place(place)
				.lat(lat).user(principal).lng(lng).content(content)
				.image1(image1name).image2(image2name).build();

		board1Repository.save(board1);
		return "ok";
	}
}
