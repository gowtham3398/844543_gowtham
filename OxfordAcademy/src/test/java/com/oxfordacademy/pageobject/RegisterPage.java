



package com.oxfordacademy.pageobject;

	import java.util.concurrent.TimeUnit;

	import org.openqa.selenium.By;
	import org.openqa.selenium.Keys;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebDriverException;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.openqa.selenium.firefox.FirefoxDriver;
	import org.openqa.selenium.ie.InternetExplorerDriver;

	public class RegisterPage {
	
		WebDriver driver;
		By register=By.className("register");
		By email=By.id("EmailAddress");
		By password=By.name("Password");
		By confirm_password=By.id("ConfirmPassword");
		By submit=By.xpath("//*[@id=\"registerBtn\"]");

		public void launchBrowser(String browser) //Launch url
		{
			try
			{
				if(browser.equalsIgnoreCase("firefox"))
				{
					System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
					driver = new FirefoxDriver();
				}
				else if(browser.equalsIgnoreCase("chrome"))
				{
					System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
					driver = new ChromeDriver();
				}
				else if(browser.equalsIgnoreCase("Internet Explore"))
				{
					System.setProperty("webdriver.ie.driver","src\\test\\resources\\Driver\\IEDriverServer.exe");
					driver = new InternetExplorerDriver();
				}
			
			
			
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			}
			catch(WebDriverException e)
			{
				System.out.println("Browser could not be launched");
			}
			
		}
			public void oxfordHomepage()
			{
				driver.get("https://academic.oup.com/journals");//Launching the website
				System.out.println(driver.getTitle());
			}
			//Enter the details for valid registration
			public void registerDetails() throws InterruptedException//Entering the details in the required field
			{
				driver.findElement(register).click();
				driver.findElement(email).sendKeys("gowtham19980303@gmail.com");
				//Thread.sleep(3000);
				driver.findElement(password).sendKeys("Gowtham@98");
				//Thread.sleep(3000);
				driver.findElement(password).sendKeys(Keys.TAB);
				driver.findElement(confirm_password).sendKeys("Gowtham@98");
				//Thread.sleep(3000);
				driver.findElement(confirm_password).sendKeys(Keys.TAB);
				//Thread.sleep(3000);
				driver.findElement(confirm_password).sendKeys(Keys.TAB);
				//Thread.sleep(3000);
				//driver.findElement(submit).click();
				driver.findElement(submit).sendKeys(Keys.ENTER);
//				Thread.sleep(5000);
//				driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
//				driver.findElement(By.xpath("/html/body/div[3]/section[1]/div/div[2]/div/ul/li[4]/div/div/div[2]/a")).click();
				
			}
//			public void loginValue(String excel_emailid,String excel_password)throws InterruptedException
//			{
//				driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();//Clicking the sign in button
//				driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys(excel_emailid);
//				driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(excel_password);
//				Thread.sleep(2000);
//				driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
//				Thread.sleep(2000);
//			}
			public void exit() throws InterruptedException
			{
				Thread.sleep(5000);
				driver.close();//closing the website
			}

	}

