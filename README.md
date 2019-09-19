# react-native-jest-enzyme
https://medium.com/@hdsenevi/unit-testing-in-react-native-with-jest-and-enzyme-40cd7dabb6f1

https://medium.com/@oieduardorabelo/jest-snapshot-testing-com-react-e-enzyme-faaea4c7c9c

Sobre a questão de organização de pastas para teste existe 2 questões importantes.
Cenario Ideal:
No padrão em que o teste fica junta com o arquivo, seria gerado um snapshot para cada arquivo. Confuso???
Outro ponto é o próprio arquivo este por sua vez teria que existir sempre, em uma pasta com multiplas telas. Muitos arquivos juntos???

Cenario Ruim:
Em casos de prazos curtos testes sao a primeira coisa a ser deixada de lado. Em uma estrutura aonde o teste fica junto com o arquivo principal poderia gerar uma grande diferenca visual já que caso o prazo mudasse e os testes fossem deixados de lado. Inumeros arquivos teriam teste enquanto outros não. Acho que não ficaria muito bonito. 

No caso separando os testes em uma pasta propria:
Caso os testes fossem deixados de lado por algum motivo e alguns já existissem não haveria incomodo visual ou confusão já que estariam encapsulados em pastas distintas em outra parte do projeto. Dropwizard e Springboot ao gerar os projetos geral arquivos principais e testes em pastas separadas.
