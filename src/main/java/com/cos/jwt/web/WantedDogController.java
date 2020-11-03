package com.cos.jwt.web;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.DTO.LocationDTO;
import com.cos.jwt.domain.watedDog.WantedDog;
import com.cos.jwt.domain.watedDog.WantedDogRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class WantedDogController {

	private final WantedDogRepository wantedDogRepository;
	
	private String 이미지저장(MultipartFile file) throws IllegalStateException, IOException {
		File path = new File("");//상대경로 찾을려고 임의로 기본 파일주소를 찍어봄
		String uploadFolder = path.getAbsolutePath()+"\\src\\main\\webapp\\find-dog\\public\\images"; //거기에 images 폴더로 설정
		File uploadPath = new File(uploadFolder/*, getFolder()*/);//여기에 설정
		if (uploadPath.exists() == false) {//없을 때 images 폴더 설정
			uploadPath.mkdirs();			
		}
		UUID uuid = UUID.randomUUID();
		String uploadFileName = uuid.toString() + "-" + file.getOriginalFilename();
		File saveFile = new File(uploadPath, uploadFileName);
//		System.out.println("파일 경로 :"+uploadPath);
//		System.out.println("파일 이름 : "+uploadFileName);
		file.transferTo(saveFile);
		uploadFileName = ".\\images\\"+uploadFileName;
		System.out.println(uploadPath+uploadFileName);
		return uploadFileName;
	}
	
	private String getFolder() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		String str = sdf.format(date);

		return str.replace("-", File.separator);
	}
	@PostMapping(value = "/board3/post", consumes = { "multipart/form-data" })
	@ResponseBody
	public String 글쓰기(@RequestParam("catagory") String catagory,
			@RequestParam("name") String name, @RequestParam("bread") String bread, @RequestParam("age") String age,
			@RequestParam("sex") String sex, @RequestParam("place") String place, @RequestParam("lat") double lat, @RequestParam("lng") double lng,
			@RequestParam("content") String content, @RequestParam("image1") MultipartFile image1,
			@RequestParam("image2") MultipartFile image2) throws IllegalStateException, IOException{
		System.out.println("실종/제보 글쓰기");
		System.out.println(name);
		String image1name=이미지저장(image1);
		String image2name=이미지저장(image2);
		WantedDog wantedDog = new WantedDog().builder().catagory(catagory).name(name).bread(bread).age(age).sex(sex).place(place)
				.lat(lat).lng(lng).content(content).image1(image1name).image2(image2name).build();
		
		wantedDogRepository.save(wantedDog);
		return "ok";
	}

	@GetMapping("/board3")
	public List<WantedDog> 글목록() {
		System.out.println("실종/제보 글목록");
		return wantedDogRepository.findAll();
	}

	@GetMapping("/board3/{id}")
	public WantedDog 글상세(@PathVariable int id) {
		System.out.println("실종/제보 상세글");
		WantedDog wantedDog = wantedDogRepository.findById(id).get();

		return wantedDog;
	}

	@Transactional
	@PutMapping("/board3/{id}")
	@ResponseBody
	public String 글수정(@PathVariable int id, @RequestBody WantedDog wantedDog) {

		System.out.println("실종/제보 글 수정하기");

		WantedDog wantedDogEntity = wantedDogRepository.findById(id).get();

		wantedDogEntity.setName(wantedDog.getName());
		wantedDogEntity.setBread(wantedDog.getBread());
		wantedDogEntity.setAge(wantedDog.getAge());
		wantedDogEntity.setContent(wantedDog.getContent());
		wantedDogEntity.setPlace(wantedDog.getPlace());
		wantedDogEntity.setSex(wantedDog.getSex());

//		wantedDogEntity.setImage1(wantedDog.getImage1());
//		wantedDogEntity.setImage2(wantedDog.getImage2());		
		return "ok";
	}

	@Transactional
	@DeleteMapping("/board3/{id}")
	@ResponseBody
	public String 글삭제(@PathVariable int id) {
		wantedDogRepository.deleteById(id);
		return "ok";
	}
	
	@PostMapping("/board4")
	@ResponseBody
	public List<WantedDog> 지도목록(@RequestBody LocationDTO location) {
		System.out.println("지도 목록 검색");
		return wantedDogRepository.findAll();
	}
}
