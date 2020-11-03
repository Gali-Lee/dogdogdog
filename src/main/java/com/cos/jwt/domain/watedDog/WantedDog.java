package com.cos.jwt.domain.watedDog;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	private String place;
	private double lat;
	private double lng;
	private String content;

	@Column(length = 10000000)
	private String image1;
	
	@Column(length = 10000000)
	private String image2;
	
	@Column(length = 10000000)
	private String wanted;
	
}
