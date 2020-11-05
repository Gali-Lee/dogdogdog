package com.cos.jwt.web;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.board3.Board3Repository;
import com.cos.jwt.domain.board3.Board3;
import com.cos.jwt.domain.board3.Board3Comment;
import com.cos.jwt.domain.board3.Board3CommentRepository;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class Board3CommentController {

	private final Board3CommentRepository commentRepository;
	private final HttpSession session;
	private final Board3Repository board3Repository;

	@PostMapping("/board3/{board3Id}/comment/write")
	public String 댓글쓰기(@RequestBody Board3Comment comment, @PathVariable int board3Id) {
		System.out.println("댓글 쓰기");

		User principal = (User) session.getAttribute("principal");
		Board3 board3Entity = board3Repository.findById(board3Id).get();

		comment.setUser(principal);
		comment.setBoard3(board3Entity);
		commentRepository.save(comment);
		return "ok";
	}

	@GetMapping("/board3/detail/{board3Id}/comment")
	public List<Board3Comment> 댓글목록(@PathVariable int board3Id) {
		System.out.println("댓글목록");
		return commentRepository.mList(board3Id);
	}

	@Transactional
	@PutMapping("/board3/{board3Id}/{commentId}")
	@ResponseBody
	public String 댓글수정(@RequestBody Board3Comment comment, @PathVariable int board3Id, @PathVariable int commentId) {
		System.out.println("댓글 수정");

		User principal = (User) session.getAttribute("principal");
		Board3 board3Entity = board3Repository.findById(board3Id).get();

		comment.setUser(principal);
		comment.setBoard3(board3Entity);
		commentRepository.save(comment);
		return "ok";
	}

	@Transactional
	@PutMapping("/board3/{board3Id}/{commentId}")
	@ResponseBody
	public String 댓글삭제(@RequestBody Board3Comment comment, @PathVariable int board3Id, @PathVariable int commentId) {
		System.out.println("댓글 삭제");

		// 댓글작성자와 로그인한 사람과 동일 인물인지 확인
		User principal = (User) session.getAttribute("principal");

//		if (principal.getId() == comment.getUser().getId()) {
//			commentRepository.deleteById(commentId);
//			return "ok";
//		} else {
//
//			return null;
//		}
		commentRepository.deleteById(commentId);
		return "ok";
	}

}
