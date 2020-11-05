package com.cos.jwt.domain.board2;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MeetingMemberRepository extends JpaRepository<MeetingMember, Integer> {

	@Query(value = "select mtName from meetingmember where mt_mtId= :id", nativeQuery = true)
	List<String> mList(int id);
	
	@Query(value = "insert into meetingmember(mtname,mt_mtid) values( :name,:id)", nativeQuery = true)
	void mInsertMember(String name, int id);
	
	@Query(value = "delete from meetingmember where mtname= :name and mt_mtid= :id", nativeQuery = true)
	void mDeleteMember(String name, int id);

}
