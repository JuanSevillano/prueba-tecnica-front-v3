import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { User } from "store/types/authTypes";


const UserCard: FC<User> = ({ avatar, first_name, last_name, email }) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={avatar}
                    title={first_name}
                />
                <CardContent>
                    
                    <Typography
                        variant="h5"
                        gutterBottom
                        component='h2'
                    >{`${first_name} ${last_name}`}</Typography>
                    
                    <Typography
                        variant='body2'
                        component='p'
                        color='textSecondary'
                    >{email}</Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    )
}

export default UserCard