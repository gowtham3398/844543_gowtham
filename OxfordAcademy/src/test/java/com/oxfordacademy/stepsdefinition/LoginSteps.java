package com.oxfordacademy.stepsdefinition;

import org.openqa.selenium.WebDriver;


import com.oxfordacademy.pageobject.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginSteps {
	WebDriver driver; 
	 LoginPage validlog = new LoginPage(driver);

	@Given("^the user launch chrome$")
	public void the_user_launch_chrome() throws Throwable 
	{
		validlog.launchBrowser("chrome");
	}

	@Then("^the user opens website$")
	public void the_user_opens_website() throws Throwable 
	{
	  validlog.oxfordHomepage();
	}

	@Then("^The user login using \"([^\"]*)\" and \"([^\"]*)\" with vaild and invaild deatils$")
	public void the_user_login_using_and_with_vaild_and_invaild_deatils(String emailId, String password) throws Throwable 
	{
	   validlog.oxfordDetails(emailId, password);
	}
	
	@Then("^the user closes the browser$")
	public void the_user_closes_the_browser() throws Throwable
	{
	   validlog.oxfordClose();
	}
}
