package com.cos.jwt.domain.user;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.cos.jwt.domain.user.User;

import ch.qos.logback.core.ConsoleAppender;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;

	@Transactional
	public User 유저정보조회(String username) {
		System.out.println("유저정보조회 들어옴");
		return userRepository.mFindByUsername(username);
	}

	@Transactional
	public String 글수정(User user, String id, User principal) {
		System.out.println("글수정 service 들어옴");
		User userEntity = userRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException(id + "는 존재하지 않습니다."));
		userEntity.setId(user.getId());
		userEntity.setEmail(user.getEmail());
		userEntity.setUsername(user.getUsername());
		userEntity.setPlace(user.getPlace());
		userEntity.setPhoneNumber(user.getPhoneNumber());
		userEntity.setUserImage(user.getUserImage());
		userEntity.setPassword(user.getPassword());
		System.out.println("글수정 sevice 끝");
		return "1";

	}
}