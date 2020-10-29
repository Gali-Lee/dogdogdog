package com.cos.jwt.web;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.watedDog.WantedDog;
import com.cos.jwt.domain.watedDog.WantedDogRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class WantedDogController {
	
	private final WantedDogRepository wantedDogRepository;
	@PostMapping("/board3/post")
	@ResponseBody
	public String 글쓰기(@RequestBody WantedDog wantedDog) {
		System.out.println("실종/제보 글쓰기");

		//WantedDog wantedDogEntity = wantedDogRepository.findById(1).get();

		System.out.println(wantedDog);
		wantedDogRepository.save(wantedDog);
		return "ok";
	}
	
	@GetMapping("/board3")
	public List<WantedDog> 글목록(){
		 System.out.println("실종/제보 글목록");
		return wantedDogRepository.findAll();
	}
	@GetMapping("/board3/{id}")
	public WantedDog 글상세(@PathVariable int id) {
		System.out.println("실종/제보 상세글");
		WantedDog wantedDog = wantedDogRepository.findById(id).get();
		
		return wantedDog;
	}
	@Transactional
	@PutMapping("/board3/{id}")
	@ResponseBody
	public String 글수정(@PathVariable int id, @RequestBody WantedDog wantedDog) {

		System.out.println("실종/제보 글 수정하기");

		WantedDog wantedDogEntity = wantedDogRepository.findById(id).get();

		wantedDogEntity.setName(wantedDog.getName());
		wantedDogEntity.setBread(wantedDog.getBread());
		wantedDogEntity.setAge(wantedDog.getAge());
		wantedDogEntity.setContent(wantedDog.getContent());
		wantedDogEntity.setPlace(wantedDog.getPlace());
		wantedDogEntity.setSex(wantedDog.getSex());
		
//		wantedDogEntity.setImage1(wantedDog.getImage1());
//		wantedDogEntity.setImage2(wantedDog.getImage2());		
		return "ok";
	}
	@Transactional
	@DeleteMapping("/board3/{id}")
	@ResponseBody
	public String 글삭제(@PathVariable int id) {
		wantedDogRepository.deleteById(id);
		return "ok";
	}
}
