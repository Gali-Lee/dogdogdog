package com.cos.jwt.domain.board2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;




public interface MeetingRepository extends JpaRepository<Meeting, Integer>{

//	@Query(value = "insert from ")
//	void mInsertMember(int id);
}
