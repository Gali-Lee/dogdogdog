package com.cos.jwt.web;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {

	private final UserRepository personRepository;
	private final HttpSession session;

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
	@ResponseBody
	public ResponseEntity<?> detail(@PathVariable String username) {
		
		System.out.println("회원정보 조회"+username);
//		User personEntity = personRepository.mFindByUsername(username);
//		System.out.println(personEntity);
		//userRepository.mFindByUsername(username);
		return new ResponseEntity<User>(personRepository.mFindByUsername(username), HttpStatus.OK);
	}
}
