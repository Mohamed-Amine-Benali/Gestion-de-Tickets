package com.example.projet_backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)
                .usersByUsernameQuery("select adresse_mail, mot_de_passe , enabled from utilisateur where adresse_mail=?")
                .authoritiesByUsernameQuery("select adresse_mail, type_utilisateur from utilisateur where adresse_mail=?");



    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http

                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/user/add").permitAll()
                .antMatchers("/user/exist/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic()
                .and()
                .logout()
                .logoutUrl("/user/logout")
                .logoutSuccessUrl("/user/")

        ;
    }


}
