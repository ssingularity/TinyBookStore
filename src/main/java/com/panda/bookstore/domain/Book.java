package com.panda.bookstore.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "book")
public class Book {
	@Id
	@Column(name = "book_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String writer;
	private Integer price;
	private Integer storage;
	private String description;
	@Temporal(TemporalType.DATE)
	private Date publishTime;

	public Book(){}

	public Book(String name, String writer, Integer price, Integer storage, String description, Date publishTime) {
		this.name = name;
		this.writer = writer;
		this.price = price;
		this.storage = storage;
		this.description = description;
		this.publishTime = publishTime;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getStorage() {
		return storage;
	}

	public void setStorage(Integer storage) {
		this.storage = storage;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getPublishTime() {
		return publishTime;
	}

	public void setPublishTime(Date publishTime) {
		this.publishTime = publishTime;
	}
}
