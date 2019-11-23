package com.devfun.settingchart;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devfun.service.ProductService;
import com.devfun.vo.ProductVO;

@RestController
public class ProductController {
	
	@Inject
	private ProductService service;
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	@RequestMapping(value="/product")
	public List<ProductVO> ListHome(Model model) throws Exception{
		
		List<ProductVO> listProduct = service.selectProduct();
		
		return listProduct;
	} 
	

}
