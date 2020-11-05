package com.cos.jwt.config.jwt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

public class JwtAuthorizationFilter implements Filter {

	private UserRepository personRepository;

	public JwtAuthorizationFilter(UserRepository personRepository) {
		this.personRepository = personRepository;
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("JwtAuthorizationFilter 작동");

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		System.out.println("1234");
		String jwtToken = req.getHeader(JwtProps.header);
		System.out.println("44");
		System.out.println(jwtToken);
		if (jwtToken == null) {
			PrintWriter out = resp.getWriter();
			out.print("jwtToken not found");
			out.flush();
		} else {
			jwtToken = jwtToken.replace(JwtProps.auth, "");
			int personId = JWT.require(Algorithm.HMAC512(JwtProps.secret)).build().verify(jwtToken).getClaim("id").asInt();
			System.out.println(personId);
			HttpSession session = req.getSession();
			User personEntity = personRepository.findById(personId).orElseThrow();
			session.setAttribute("principal", personEntity);
			System.out.println("personEntity : "+personEntity.toString());
			System.out.println("sdfsdfsdf");
			try {
				chain.doFilter(request, response);
			} catch (Exception e) {
				PrintWriter out = resp.getWriter();
				out.print("verify fail");
				out.flush();
			}
		}
	}
}
