package com.oxfordacademy.stepsdefinition;

//import com.excel.Excel;
import com.oxfordacademy.pageobject.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class RegisterSteps {
RegisterPage enter = new RegisterPage();
//Excel ec1=new Excel();
	@Given("^Launch the Chrome browser$")
	public void launch_the_Chrome_browser() throws Throwable {
		enter.launchBrowser("chrome");
	}

	@Then("^open the Oxford Academy website$")
	public void open_the_Oxford_Academy_website() throws Throwable {
		enter.oxfordHomepage();
	}

	@Then("^register the details$")
	public void register_the_details() throws Throwable {
		enter.registerDetails();
	}

//	@Then("^login into the website$")
//	public void login_into_the_website() throws Throwable {
//		enter.loginValue(ec1.excel_emailid(2),ec1.excel_password(2));
//	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		enter.exit();
	}
}
