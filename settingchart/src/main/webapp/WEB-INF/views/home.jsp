<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>

<html>
<head>
<title>Home</title>
<%@include file="./common_resource.jsp"%>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>


 <script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/product.js"></script> 
<link href="${pageContext.request.contextPath }/resources/css/product.css"
	rel="stylesheet" />


</head>
<body>
	<h1>Chart</h1>

	<button id="load_Product" type="button">Click!</button> 
	<div id="listProduct"></div>

</body>
</html>
