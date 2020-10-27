package com.cos.jwt.domain.board2;

import java.util.List;

import javax.persistence.NamedQuery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MeetingMemberRepository extends JpaRepository<MeetingMember, Integer> {
	
	
	@Query(value = "select mtName from meetingmember where mt_mtId= :id",nativeQuery = true)
	List<String> mList(int id);
	
	
//	@Query(value = "se")
	
}
