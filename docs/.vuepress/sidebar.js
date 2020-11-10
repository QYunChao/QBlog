const project = [
    {
        title: "一个完整项目的搭建",
        collapsable: false,
        children: [
            'firstProject/introduce',
            'firstProject/start'
        ]
    }
];

const web_front = [
    {
        title: "前端基础(HTML,JS,CSS)",
        collapsable: false,
        children: [
            'base/base'
        ]
    }
];

const algorithm = [
    {
        title: "leetcode",
        collapsable: false,
        children: [
            'leetcode/leetcode',
            'leetcode/sort'
        ]
    },
];

const design_pattern = {
    title: "设计模式",
};

module.exports = {
    "/project/": project,
    "/web-front/": web_front,
    "/algorithm/": algorithm
} 