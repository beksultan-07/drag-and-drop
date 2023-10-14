import { ProjectType } from "../store/reducers/projects";

export const data: Array<ProjectType> = [
    {
        id: 1,
        name: "project1",
        tasks: [
            {
                id: 1,
                order: 1,
                text: "fajsklfjakshgjakshf;kjas",
                name: "task",
                startDate: 1696955781868,
                endDate: 1696955781868,
                priority: "Immediately",
                status: "Process",
                col: "Done",
                file: "",
                tasks: [
                    {
                        id: 1,
                        order: 1,
                        text: "text1",
                    },
                    {
                        id: 2,
                        order: 2,
                        text: "text2",
                    },
                ],
                comments: [
                    {
                        id: 1,
                        date: 1696955781868,
                        author: "Michael Jordan",
                        text: "fsdkalfjalksfja;s",
                        subcomments: [
                            {
                                id: 1,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                    {
                                        id: 2,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                ],
                            },
                            {
                                id: 2,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                order: 2,
                text: "aklsflasjflkasjfl;kasjflksja",
                name: "task2",
                col: "Done",
                startDate: 1696955781868,
                endDate: 1696955781868,
                priority: "Immediately",
                status: "Done",
                file: "",
                tasks: [
                    {
                        id: 1,
                        order: 1,
                        text: "text",
                    },
                    {
                        id: 2,
                        order: 2,
                        text: "text",
                    },
                ],
                comments: [
                    {
                        id: 1,
                        date: 1696955781868,
                        author: "Michael Jordan",
                        text: "fsdkalfjalksfja;s",
                        subcomments: [
                            {
                                id: 1,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                    {
                                        id: 2,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                ],
                            },
                            {
                                id: 2,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                order: 3,
                text: "task3fkaslfjklas;jflkasjfk;alsj",
                name: "task3",
                col: "Queue",
                startDate: 1696955781868,
                endDate: 1696955781868,
                priority: "Immediately",
                status: "Done",
                file: "",
                tasks: [
                    {
                        id: 1,
                        order: 1,
                        text: "text",
                    },
                    {
                        id: 2,
                        order: 2,
                        text: "text",
                    },
                ],
                comments: [
                    {
                        id: 1,
                        date: 1696955781868,
                        author: "Michael Jordan",
                        text: "fsdkalfjalksfja;s",
                        subcomments: [
                            {
                                id: 1,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                ],
                            },
                            {
                                id: 2,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "project2",
        tasks: [
            {
                id: 1,
                order: 1,
                name: "task1",
                text: "fsdakmflskagnlaksd",
                col: "Done",

                startDate: 1696955781868,
                endDate: 1696955781868,
                priority: "Immediately",
                status: "Done",
                file: "",
                tasks: [
                    {
                        id: 1,
                        order: 1,
                        text: "text1",
                    },
                    {
                        id: 2,
                        order: 2,
                        text: "text2",
                    },
                ],
                comments: [
                    {
                        id: 1,
                        date: 1696955781868,
                        author: "Michael Jordan",
                        text: "fsdkalfjalksfja;s",
                        subcomments: [
                            {
                                id: 1,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                    {
                                        id: 2,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                ],
                            },
                            {
                                id: 2,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                order: 2,
                text: "fsdakmflskagnlaksd",
                name: "task2",
                col: "Done",

                startDate: 1696955781868,
                endDate: 1696955781868,
                priority: "Immediately",
                status: "Done",
                file: "",
                tasks: [
                    {
                        id: 1,
                        order: 1,
                        text: "text",
                    },
                    {
                        id: 2,
                        order: 2,
                        text: "text",
                    },
                ],
                comments: [
                    {
                        id: 1,
                        date: 1696955781868,
                        author: "Michael Jordan",
                        text: "fsdkalfjalksfja;s",
                        subcomments: [
                            {
                                id: 1,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                    {
                                        id: 1,
                                        date: 1696955781868,
                                        author: "Michael Jordan",
                                        text: "fsdkalfjalksfja;s",
                                        subcomments: [],
                                    },
                                ],
                            },
                            {
                                id: 2,
                                date: 1696955781868,
                                author: "Michael Jordan",
                                text: "fsdkalfjalksfja;s",
                                subcomments: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
