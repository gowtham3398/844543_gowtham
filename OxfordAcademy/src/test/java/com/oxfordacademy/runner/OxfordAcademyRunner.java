package com.oxfordacademy.runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
	
		glue = {"com.oxfordacademy.stepsdefinition"},
		monochrome = true
		)

public class OxfordAcademyRunner {

}
