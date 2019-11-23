package com.devfun.service;

import java.util.List;

import com.devfun.vo.ProductVO;

public interface ProductService {
	
	public List<ProductVO> selectProduct() throws Exception;
}
