package com.cos.jwt.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.dog.Dog;
import com.cos.jwt.domain.dog.DogRepository;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {

	private final UserRepository personRepository;
	private final DogRepository dogRepository;
	private final HttpSession session;

	// 회원정보 등록
	@PostMapping("/joinProc")
	public String 회원가입(@RequestBody User person) {

		personRepository.save(person);
		return "ok";
	}

	// 강아지 정보 등록
	@PostMapping("/petJoinProc")
	public String 펫등록(@RequestBody Dog dog) {
		dogRepository.save(dog);
		return "ok";
	}

	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		System.out.println("2223s");
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);

	}
<<<<<<< HEAD
//	@GetMapping("/user")
//	public String 가져오기(String username) {
//		
//		return phoneNumber;
//	}
	
	//@CrossOrigin(origins = "http://127.0.0.1:5500", methods = RequestMethod.GET)
=======

	// @CrossOrigin(origins = "http://127.0.0.1:5500", methods = RequestMethod.GET)
>>>>>>> ksy
	@GetMapping("/person/{id}")
	public ResponseEntity<?> 회원정보(@PathVariable int id, HttpServletRequest request) {
		HttpSession session = request.getSession();
		System.out.println("회원정보 조회");
		if (session.getAttribute("principal") != null) {
			User personEntity = personRepository.findById(id).get();
			System.out.println(personEntity);
			return new ResponseEntity<User>(personEntity, HttpStatus.OK);
		}
		return new ResponseEntity<String>("You don't have authorization", HttpStatus.FORBIDDEN);

	}

	@GetMapping("/member/{id}")
	public User 회원정보(@PathVariable int id) {
		System.out.println("회원정보 조회");
		User personEntity = personRepository.findById(id).get();
		return personEntity;
	}
}
