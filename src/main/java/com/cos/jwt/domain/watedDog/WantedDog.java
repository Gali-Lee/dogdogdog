package com.cos.jwt.domain.watedDog;

import java.util.List;

import javax.persistence.Column;
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
@Builder
@Data
@Entity
public class WantedDog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String catagory;
	private String name;
	private String bread;
	private String age;
	private String sex;
/*
	@Column(length = 10000000)
	private String image1;
	
	@Column(length = 10000000)
	private String image2;
	*/
	private String place;
	private String content;

}
