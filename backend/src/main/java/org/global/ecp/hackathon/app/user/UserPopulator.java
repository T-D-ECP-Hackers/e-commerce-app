package org.global.ecp.hackathon.app.user;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.user.model.User;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Profile("local")
class UsersPopulator {

    private final UserService userService;

    public UsersPopulator(final UserService userService) {

        this.userService = userService;
        prePopulateUserMap();
    }

    public void prePopulateUserMap() {

        User user = UserService.createUser(User.builder()
                                                              .name("user1")
                                                              .password("thisisapassword")
                                                              .email("hi@email.com")
                                                              .avatarUrl("imageUrl").build());
        log.info("Adding user: {}", user);
    }
}
