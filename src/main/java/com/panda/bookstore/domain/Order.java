package com.panda.bookstore.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Orders")
public class Order {
	@Id
	@Column(name = "order_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@ManyToOne(targetEntity = User.class)
	@JoinColumn(name="user_id",referencedColumnName = "user_id",nullable = false)
	private User user;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	private String bookName;
	private Integer bookId;
	private Integer count;
	private Integer totalPrice;
	@Temporal(TemporalType.DATE)
	private Date time;

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public Integer getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Integer totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Date getTime() {
		return time;
	}

	public Order(String bookName, Integer bookId, Integer count, Integer totalPrice, Date time) {
		this.bookName = bookName;
		this.bookId = bookId;
		this.count = count;
		this.totalPrice = totalPrice;
		this.time = time;
	}

	public Order() {

	}

	public void setTime(Date time) {
		this.time = time;
	}
}
