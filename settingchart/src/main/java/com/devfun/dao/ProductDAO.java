package com.devfun.dao;

import java.util.List;

import com.devfun.vo.ProductVO;

public interface ProductDAO {
	
	public List<ProductVO> selectProduct() throws Exception;

}
