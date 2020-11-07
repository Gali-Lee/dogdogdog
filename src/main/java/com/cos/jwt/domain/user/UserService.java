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
}
