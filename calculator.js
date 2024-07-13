document.addEventListener('DOMContentLoaded',()=>{
    const resultField = document.getElementById('result');
    document.querySelectorAll('.btn').forEach(button=>{
        button.addEventListener('click',()=>{
            const action = button.getAttribute('data-action');
            const value = button.textContent;
            switch(action){
                case 'clear':
                    clearResult();
                    break;
                    case 'delete':
                        deleteLast();
                        break;
                        case 'append':
                            appendCharacter(value);

                            break;
                            case 'calculate':
                                calculateResult();
                                break;
                                default:
                                    break;
            }
        });
    });
    function clearResult(){
        resultField.value='';
    }
    function deleteLast(){
      resultField.value=resultField.value.slice(0,-1);

    }function appendCharacter(character){
        resultField.value+=character;
    }function calculateResult(){
        resultField.value = eval(resultField.value);
    }
})












    