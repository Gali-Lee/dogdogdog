package com.cos.jwt.domain.board2;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Meeting { //Board2 테이블 객체.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mtId; //기본키
	private int mtCreateTime; //게시글생성시간
	private String mtTitle; // 게시글제목
	private String mtContent; //게시글기타내용
	private String mtPlace; //장소
	private int mtTime; //만날시간
	private int mtCount; //현재인원
	private int maxCount; // 최대인원
	
	@JsonIgnoreProperties({"mt"})
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "mt")
	private List<MeetingMember> mtList; 
	
	

}
