import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';

const Main = ({ album }) => {
    return (
        <main role="main">
            <Jumbotron className="text-center">
                <Container>
                    <h1 className="jumbotron-heading">Shibori</h1>
                    <p className="lead text-muted">
                        The kimono is a traditional Japanese garment and the national dress of Japan.
                        The kimono is a T-shaped, wrapped-front garment with square sleeves and a rectangular body,
                        and is worn left side wrapped over right, unless the wearer is deceased.
                        The kimono is traditionally worn with a broad sash, called an obi, and is commonly worn with
                        accessories such as zōri sandals and tabi socks.
                    </p>
                    <p>
                        <Button color="primary" className="mx-1 my-2">
                            Main call to action
                        </Button>
                        <Button color="secondary" className="my-2">
                            Secondary action
                        </Button>
                    </p>
                </Container>
            </Jumbotron>
            <Album album={album} />
        </main>
    );
};

export default Main;
