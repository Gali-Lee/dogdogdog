package com.cos.jwt.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.dog.Dog;
import com.cos.jwt.domain.dog.DogRepository;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;
import com.cos.jwt.domain.user.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {

	private final UserRepository personRepository;
	private final DogRepository dogRepository;
	private final HttpSession session;
	private final UserService userService;

	// 회원정보 등록
	@PostMapping("/joinProc")
	public String 회원가입(@RequestBody User person) {

		personRepository.save(person);
		return "ok";
	}
	
	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		System.out.println("2223s");
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);

	}

//	@GetMapping("/user/{username}")
//	public ResponseEntity<?> 회원정보(@PathVariable int id, HttpServletRequest request) {
//		HttpSession session = request.getSession();
//		System.out.println("회원정보 조회");
//		if (session.getAttribute("principal") != null) {
//			User personEntity = personRepository.findById(id).get();
//			System.out.println(personEntity);
//			return new ResponseEntity<User>(personEntity, HttpStatus.OK);
//		}
//		return new ResponseEntity<String>("You don't have authorization", HttpStatus.FORBIDDEN);
//
//	}

	@GetMapping("/user/{username}")
	public ResponseEntity<?> detail(@PathVariable String username) {
		System.out.println("회원정보 조회"+username);
		//User personEntity = personRepository.mFindByUsername(username);
		//System.out.println(personEntity);
		
		return new ResponseEntity<User>(userService.유저정보조회(username), HttpStatus.OK);
	}

@PutMapping("/user/{id}")
public ResponseEntity<?> update(@RequestBody User user, @PathVariable String id){
	User principal = (User) session.getAttribute("principal");
	System.out.println("indexcontroller 들어옴");
	String result = userService.글수정(user, id, principal);
	
	if(result == "1") {
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}else {
		return new ResponseEntity<String>("fail", HttpStatus.FORBIDDEN);
	}
}

}
