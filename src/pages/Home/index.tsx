import { useEffect, useState } from "react";
import { Profile } from "../../services/Profile/types";
import { index } from "../../services/Profile";
import { convertDateString, fromCents } from "../../Helper";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Spinner";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        index()
            .then(profile => setProfile(profile))
            .catch(() => toast.error('Error fetching profile, refresh the page and try again'))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading || !profile ? <Spinner /> : (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Account Overview</Card.Title>
                                <Card.Text>Current balance: ${fromCents(profile.balance)}</Card.Text>
                                <Card.Text>Incomes: ${fromCents(profile.totalIncome)}</Card.Text>
                                <Card.Text>Expenses: ${fromCents(profile.totalExpense)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Transactions</Card.Title>
                                <ListGroup variant="flush">
                                    {profile.lastTransactions?.map(transaction => (
                                        <ListGroup.Item key={transaction.id} className={transaction.type === 'expense' ? 'text-danger' : 'text-success'}>
                                            {transaction.type === 'expense' ? `-$${fromCents(transaction.amount)}` : `$${fromCents(transaction.amount)}`}: {convertDateString(transaction.transaction_date)}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
