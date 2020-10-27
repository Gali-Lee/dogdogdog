package com.cos.jwt.domain.board2;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@Entity
public class MeetingMember {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mtmId;
	private String mtName;
	
	@ManyToOne
	private Meeting mt;
}
