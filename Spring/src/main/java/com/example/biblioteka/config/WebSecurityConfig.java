package com.example.biblioteka.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.biblioteka.filters.TokenFilter;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors()
                .and()
                .csrf()
                .disable()
                .addFilterBefore(
                        new TokenFilter(authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class
                )
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "*").permitAll()
                .antMatchers(HttpMethod.POST, "*").permitAll();
//                .antMatchers(HttpMethod.POST, "/home/login").permitAll()
//                .antMatchers(HttpMethod.POST, "/home/registration").permitAll()
//                .antMatchers(HttpMethod.POST, "/book/AddBook").permitAll()
//                .antMatchers( "/book/**").permitAll().anyRequest().authenticated();

    }
}
