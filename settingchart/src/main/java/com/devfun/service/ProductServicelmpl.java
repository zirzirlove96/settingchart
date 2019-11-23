package com.devfun.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.devfun.dao.ProductDAO;
import com.devfun.vo.ProductVO;

@Service
public class ProductServicelmpl implements ProductService{

	@Inject
	private ProductDAO dao;
	
	@Override
	public List<ProductVO> selectProduct() throws Exception {
		// TODO Auto-generated method stub
		return dao.selectProduct();
	}
	
	

}
