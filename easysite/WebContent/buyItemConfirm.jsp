<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/style.css">
<title>BuyItemConfirm画面</title>
</head>
<body>
	<div id="header"></div>
	<div id="main">
		<div id="top">
			<p>BuyItemConfirm</p>
		</div>
		<div>
			<s:form action="BuyItemConfirmAction">
				<table>
					<tr>
						<td><span>商品名</span></td>
						<td><s:property value="session.buyItem_name" /></td>
					</tr>
					<tr>
						<td><span>値段</span></td>
						<td><s:property value="session.buyItem_price" /><span>円</span></td>
					</tr>
					<tr>
						<td><span>購入個数</span></td>
						<td><s:property value="session.stock" /><span>個</span></td>
					</tr>
					<tr>
						<td><span>支払い方法</span></td>
						<td><s:property value="session.pay" /></td>
					</tr>
					<tr>
						<td><s:submit value="完了" /></td>
					</tr>
				</table>
			</s:form>
		</div>
	</div>
	<div id="footer"></div>
</body>
</html>