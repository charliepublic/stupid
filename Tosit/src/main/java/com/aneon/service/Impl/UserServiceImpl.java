package com.aneon.service.Impl;

import com.aneon.mapper.UserMapper;
import com.aneon.po.*;
import com.aneon.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public User login(String username, String password) {
        User user = new User();
        Map<String, Object> params = new HashMap<>();
        params.put("username", username);
        params.put("password", password);
        if(username.length() == 10) {
            RootManager rootManager = userMapper.selectAdmin(params);
            if (rootManager == null) {
                return null;
            }
            user.setName(rootManager.getName());
            user.setUsername(rootManager.getUsername());
            user.setIdentify(Identify.ROOT);
            return user;
        }
        else if (username.length() == 12) {
            Teacher teacher = userMapper.selectTeacher();
            if (teacher == null) {
                return null;
            }
            user.setUsername(teacher.getUsername());
            user.setName(teacher.getName());
            user.setIdentify(Identify.TEACHER);
            return user;
        }
        else if(username.length() == 14) {
            Student student = userMapper.selectStudent();
            if (student == null) {
                return null;
            }
            user.setUsername(student.getUsername());
            user.setName(student.getName());
            user.setIdentify(Identify.STUDENT);
            return user;
        }
        return null;
    }
}