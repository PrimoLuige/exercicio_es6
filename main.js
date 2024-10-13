const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Bruno', nota: 5.0 },
    { nome: 'Carla', nota: 8.0 },
    { nome: 'Diego', nota: 4.5 },
    { nome: 'Eduarda', nota: 6.0 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovados = filtrarAprovados(alunos);


console.log(alunosAprovados);
