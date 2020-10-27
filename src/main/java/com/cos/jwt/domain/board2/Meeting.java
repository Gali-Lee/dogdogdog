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
	private int mtId;
	private String mtTitle;
	private String mtContent;
	private String mtPlace;
	private int mtCount;
	
	@JsonIgnoreProperties({"mt"})
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "mt")
	private List<MeetingMember> mtList; 
	
	

}
