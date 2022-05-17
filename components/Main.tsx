import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";

import TABLE_BODY from "./docker-datatables.json";

// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
    {
        prop: "host",
        title: "Host",
        isFilterable: true
    },
    {
        prop: "name",
        title: "Name"
    },
    {
        prop: "started",
        title: "Started"
    },
    {
        prop: "image",
        title: "Image"
    },
];

// Then, use it in a component.
export default function Main() {
    return (
        <DatatableWrapper
            body={TABLE_BODY.data}
            headers={STORY_HEADERS}
            paginationOptionsProps={{
                initialState: {
                    rowsPerPage: 10,
                    options: [5, 10, 15, 20]
                }
            }}
        >
            <Row className="mb-4 p-2 mt-5 pt-4">
                <Col
                    xs={12}
                    lg={4}
                    className="d-flex flex-col justify-content-end align-items-end"
                >
                    <Filter />
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                >
                    <PaginationOptions />
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    className="d-flex flex-col justify-content-end align-items-end"
                >
                    <Pagination />
                </Col>
            </Row>
            <Table className="mt-5">
                <TableHeader />
                <TableBody />
            </Table>
        </DatatableWrapper>
    );
}
