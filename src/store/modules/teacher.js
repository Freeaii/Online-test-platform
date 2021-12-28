//题库管理页面

//准备actions，用于响应组件中的动作
const actions={
    changeCourse:function (context,value) {
        context.commit('changeCourse',value)
    },
    changeKnowledge:function (context,value) {
        context.commit('changeKnowledge',value)
    },
    changeQuestionStyle:function (context,value) {
        context.commit('changeQuestionStyle',value)
    },
    changeLevel:function (context,value) {
        context.commit('changeLevel',value)
    },
}

//准备mutations，操作数据
const mutations={
    changeCourse:function (state,value) {
        state.course=value
    },
    changeKnowledge:function (state,value) {
        state.knowledge=value
    },
    changeQuestionStyle:function (state,value) {
        state.questionStyle=value
    },
    changeLevel:function (state,value) {
         state.level=value
    }
}



//准备state，存储数据
const state={
    course:"",
    knowledge:{},
    questionStyle:"",
    level:"",
}

export const teacher_question={
    namespace:true,
    actions,
    mutations,
    state,
}
