<template>
    <div class="article" ref='editor'></div>
</template>

<script setup>
    /*
   *此组件为公共组件，用于生成富文本编辑框
   *作者：文成
   *联系方式：1374977935@qq.com
   *制作日期：2021.12.9
   * */
    import {onMounted, onBeforeUnmount, ref,inject} from 'vue';
    import MyEditor from 'wangeditor';

    //获取wangEditor中必要的变量

    const editor = ref();
    let instance;
    let style=inject('addQuestionStyle')
    let props=defineProps({
        data:Object,
        answers:Object
    })
    /*
    * 组件挂载完毕后，配置富文本编辑框相关功能
    * */
    onMounted(() => {

        const { BtnMenu} = MyEditor.menuConstructors
        //有序和无需按钮
        let fill_or=`<button style="display: flex; margin: 0 12px; align-items:center;background-color: #ffffff;border: 0"><svg t="1639287787063" class="icon" viewBox="0 0 1224 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1769" data-spm-anchor-id="a313x.7781069.0.i2" width="20" height="20"><path d="M1109.824838 795.155711a57.208777 57.208777 0 0 1 114.398427 0v57.208777a168.546888 168.546888 0 0 1-171.607204 171.607204H171.704183A168.546888 168.546888 0 0 1 0.096979 852.345361v-57.18965a54.052826 54.052826 0 0 1 57.208777-57.208776 54.052826 54.052826 0 0 1 57.208777 57.208776v57.208777a54.052826 54.052826 0 0 0 57.208777 57.208777h880.892751a54.052826 54.052826 0 0 0 57.208777-57.208777v-57.208777zM114.495406 228.844289a54.052826 54.052826 0 0 1-57.208777 57.208776A54.052826 54.052826 0 0 1 0.096979 228.844289V171.635512A168.546888 168.546888 0 0 1 171.704183 0.028308h880.911878A168.546888 168.546888 0 0 1 1224.223265 171.635512v57.208777a57.208777 57.208777 0 1 1-114.398427 0V171.635512a54.052826 54.052826 0 0 0-57.208777-57.208777H171.704183a54.052826 54.052826 0 0 0-57.208777 57.208777z" fill="#999999" p-id="1770"></path><path d="M387.64771 247.435706m47.186243 0l380.416371 0q47.186243 0 47.186243 47.186243l0 0.019127q0 47.186243-47.186243 47.186243l-380.416371 0q-47.186243 0-47.186243-47.186243l0-0.019127q0-47.186243 47.186243-47.186243Z" fill="#8a8a8a" p-id="1771" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path><path d="M387.64771 673.603797m47.186243 0l380.416371 0q47.186243 0 47.186243 47.186243l0 0.019127q0 47.186243-47.186243 47.186243l-380.416371 0q-47.186243 0-47.186243-47.186243l0-0.019127q0-47.186243 47.186243-47.186243Z" fill="#8a8a8a" p-id="1772" data-spm-anchor-id="a313x.7781069.0.i3" class="selected"></path><path d="M672.218818 251.01245m0 47.186243l0 422.591347q0 47.186243-47.186243 47.186243l-0.019127 0q-47.186243 0-47.186243-47.186243l0-422.591347q0-47.186243 47.186243-47.186243l0.019127 0q47.186243 0 47.186243 47.186243Z" fill="#8a8a8a" p-id="1773" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path></svg></button>`
        let fill_un=`<button style="display: flex; margin: 0 12px; align-items:center;background-color: #ffffff;border: 0"><svg t="1639288282825" class="icon" viewBox="0 0 1224 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2195" data-spm-anchor-id="a313x.7781069.0.i7" width="20" height="20"><path d="M1109.824838 795.155711a57.208777 57.208777 0 0 1 114.398427 0v57.208777a168.546888 168.546888 0 0 1-171.607204 171.607204H171.704183A168.546888 168.546888 0 0 1 0.096979 852.345361v-57.18965a54.052826 54.052826 0 0 1 57.208777-57.208776 54.052826 54.052826 0 0 1 57.208777 57.208776v57.208777a54.052826 54.052826 0 0 0 57.208777 57.208777h880.892751a54.052826 54.052826 0 0 0 57.208777-57.208777v-57.208777zM114.495406 228.844289a54.052826 54.052826 0 0 1-57.208777 57.208776A54.052826 54.052826 0 0 1 0.096979 228.844289V171.635512A168.546888 168.546888 0 0 1 171.704183 0.028308h880.911878A168.546888 168.546888 0 0 1 1224.223265 171.635512v57.208777a57.208777 57.208777 0 1 1-114.398427 0V171.635512a54.052826 54.052826 0 0 0-57.208777-57.208777H171.704183a54.052826 54.052826 0 0 0-57.208777 57.208777z" fill="#999999" p-id="2196"></path><path d="M231.762879 247.435706m41.754182 0l288.319995 0q41.754183 0 41.754182 41.754183l0 10.883248q0 41.754183-41.754182 41.754182l-288.319995 0q-41.754183 0-41.754182-41.754182l0-10.883248q0-41.754183 41.754182-41.754183Z" fill="#8a8a8a" p-id="2197" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M231.762879 673.603797m41.754182 0l288.319995 0q41.754183 0 41.754182 41.754182l0 10.883248q0 41.754183-41.754182 41.754183l-288.319995 0q-41.754183 0-41.754182-41.754183l0-10.883248q0-41.754183 41.754182-41.754182Z" fill="#8a8a8a" p-id="2198" data-spm-anchor-id="a313x.7781069.0.i13" class="selected"></path><path d="M464.882428 251.01245m0 47.186243l0 422.591347q0 47.186243-47.186243 47.186243l-0.019127 0q-47.186243 0-47.186243-47.186243l0-422.591347q0-47.186243 47.186243-47.186243l0.019127 0q47.186243 0 47.186243 47.186243Z" fill="#8a8a8a" p-id="2199" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M640.754947 247.435706m41.754183 0l288.319994 0q41.754183 0 41.754182 41.754183l0 10.883248q0 41.754183-41.754182 41.754182l-288.319994 0q-41.754183 0-41.754183-41.754182l0-10.883248q0-41.754183 41.754183-41.754183Z" fill="#8a8a8a" p-id="2200" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M640.754947 673.603797m41.754183 0l288.319994 0q41.754183 0 41.754182 41.754182l0 10.883248q0 41.754183-41.754182 41.754183l-288.319994 0q-41.754183 0-41.754183-41.754183l0-10.883248q0-41.754183 41.754183-41.754182Z" fill="#8a8a8a" p-id="2201" data-spm-anchor-id="a313x.7781069.0.i8" class="selected"></path><path d="M873.85537 251.01245m0 47.186243l0 422.591347q0 47.186243-47.186243 47.186243l-0.019127 0q-47.186243 0-47.186243-47.186243l0-422.591347q0-47.186243 47.186243-47.186243l0.019127 0q47.186243 0 47.186243 47.186243Z" fill="#8a8a8a" p-id="2202" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg></button>`


        // 菜单 class ，Button 菜单继承 BtnMenu class
        class Fill_or extends BtnMenu {
            constructor(editor) {
                // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
                const $elem = MyEditor.$(fill_or)
                super($elem, editor)
            }
            // 菜单点击事件
            clickHandler() {
                //通知父组件写入答案
                props.data.editorFuns.getAnswerInsert('有序插入')
                //点击后插入占位符标识
                instance.cmd.do('insertHTML',`(#${props.answers.length})`)
            }
            tryChangeActive() {
                // 激活菜单
                this.active()

                //取消激活菜单
                // this.unActive()
            }
        }
        //无序
        class Fill_un extends BtnMenu {
            constructor(editor) {
                // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
                const $elem = MyEditor.$(fill_un)
                super($elem, editor)
            }
            // 菜单点击事件
            clickHandler() {
                //通知父组件生成答案
                props.data.editorFuns.getAnswerInsert('无序插入')

                let finalAnswer=props.answers[props.answers.length-1]
                let input=`${finalAnswer.subscript}-${finalAnswer.answer[finalAnswer.answer.length-1].subscript}`
                //点击后插入占位符标识
                instance.cmd.do('insertHTML',`(#${input})`)


            }
            tryChangeActive() {
                // 激活菜单
                this.active()

                //取消激活菜单
                // this.unActive()
            }
        }
        //实例化编辑器
        instance = new MyEditor(editor.value);
        //设置编辑器的功能
        let fill=['addFill_or', 'addFill_un']
        instance.config.menus = [
            'head',
            'bold',
            'fontSize',
            'italic',
            'underline',
            'strikeThrough',
            'lineHeight',
            'foreColor',
            'list',
            'todo',
            'justify',
            'quote',
            'code',
            'splitLine',
            'undo',
            'redo',
        ]
        switch (style.value) {
            case '填空题':
                instance.config.menus=[...instance.config.menus,...fill]
        }

        instance.menus.extend('addFill_or', Fill_or)
        instance.menus.extend('addFill_un', Fill_un)
        //组合对象
        Object.assign(instance.config, {
            onchange() {
                props.data.editorFuns.changeQuestionHTML(instance.txt.html())
            },
        });
        instance.create();
    });

    /*
    * 用于在富文本当前光标位置插入HTML机节点，主要用于做标记
    * */


    /*
    * 在组件卸载的时候同时卸载富文本实例
    * */
    onBeforeUnmount(() => {
        instance.destroy();
        instance = null;
    });
</script>

<style>
    .article{
        width: 100%;
    }
</style>
