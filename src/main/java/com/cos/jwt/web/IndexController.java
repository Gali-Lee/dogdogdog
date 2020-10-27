package com.cos.jwt.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.dog.Dog;
import com.cos.jwt.domain.dog.DogRepository;
import com.cos.jwt.domain.person.Person;
import com.cos.jwt.domain.person.PersonRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class IndexController {
	
	private final PersonRepository personRepository;
	private final DogRepository dogRepository;
	
	@GetMapping({"", "/"})
	public String index() {
		return "index";
	}
	
	
	@PostMapping("/joinProc")
	public String 회원가입(@RequestBody Person person) {
		
		personRepository.save(person);
		return "ok";
	}
	@PostMapping("/petJoinProc")
	public String 펫등록(@RequestBody Dog dog) {
		dogRepository.save(dog);
		return "ok";
	}
	
	//@CrossOrigin(origins = "http://127.0.0.1:5500", methods = RequestMethod.GET)
	@GetMapping("/person/{id}")
	public ResponseEntity<?> 회원정보(@PathVariable int id,
			HttpServletRequest request) {
		HttpSession session = request.getSession();
		System.out.println("회원정보 조회");
		if(session.getAttribute("principal") != null) {
			Person personEntity = personRepository.findById(id).get();
			System.out.println(personEntity);
			return new ResponseEntity<Person>(personEntity,HttpStatus.OK);
		}
		return new ResponseEntity<String>("You don't have authorization",HttpStatus.FORBIDDEN);
		
		
	}
}









