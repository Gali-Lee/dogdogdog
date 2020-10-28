package com.cos.jwt.domain.dog;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.cos.jwt.domain.user.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DogService {
	
	private final DogRepository dogRepository;
	
	@Transactional
	public void 강아지등록(Dog dog, User principal) {
		dog.setUser(principal);
		dogRepository.save(dog);
	}

}
