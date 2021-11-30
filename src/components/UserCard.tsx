import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from "@material-ui/core";
import React, { FC } from "react";
import { User } from "store/types/authTypes";
import styled from "styled-components";

const StyledCard = styled(Card)`
${({ theme }) => `
    width: 100%;
    margin: 20px 0;
    opacity: 1;
    animation: Entrance 0.5s  ease-in;
    @media (min-width: 600px){
        
    }
    @keyframes Entrance {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`}`;



interface UCardI extends User {
    delay: number;
}

const UserCard: FC<UCardI> = ({ avatar, first_name, last_name, email, delay }) => {

    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    className="media"
                    style={{ height: '190px' }}
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

        </StyledCard>
    )
}

export default UserCard