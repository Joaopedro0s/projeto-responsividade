<script setup lang="ts">
import SecaoLayout from '../../components/SecaoLayout.vue'
import BlocoCodigo from '../../components/BlocoCodigo.vue'
import LabUnidades from '../../components/labs/LabUnidades.vue'

defineProps<{ titulo: string; pergunta: string }>()

const exemplo = `/* 1rem = tamanho da fonte do <html> (padrão do navegador: 16px) */
html { font-size: 100%; }          /* respeita a escolha da pessoa */

h1   { font-size: 2rem; }          /* 32px, e cresce se a pessoa aumentar a fonte */
.btn { padding: 0.5rem 1rem; }     /* espaçamentos acompanham o texto */

/* em = tamanho da fonte do próprio elemento (cuidado: acumula em aninhamento) */
.tag { font-size: 0.875rem; padding: 0.25em 0.5em; }

.coluna { width: 50%; }            /* % = parte do elemento pai */
.hero   { min-height: 100dvh; }    /* dvh = altura visível, descontando a barra do celular */
.texto  { max-width: 65ch; }       /* ch = largura do "0": ótimo para linhas legíveis */
.faixa  { width: 100vw; }          /* vw = 1% da largura da janela */`
</script>

<template>
  <SecaoLayout :titulo="titulo" :pergunta="pergunta">
    <p>
      Unidades <strong>absolutas</strong> têm tamanho fixo: <code>px</code> é a principal.
      Unidades <strong>relativas</strong> dependem de alguma outra medida e por isso se adaptam.
    </p>
    <ul>
      <li><code>rem</code>: relativa à fonte do <code>&lt;html&gt;</code>. Use para fontes e espaçamentos.</li>
      <li><code>em</code>: relativa à fonte do próprio elemento. Use em coisas que devem acompanhar o texto dele (padding de botão).</li>
      <li><code>%</code>: relativa ao elemento pai. Use para larguras flexíveis.</li>
      <li><code>fr</code>: “fração” do espaço livre no Grid.</li>
      <li><code>vw</code> / <code>vh</code>: 1% da largura / altura da janela. <code>dvh</code> é a altura que de fato está visível no celular, sem a barra do navegador.</li>
      <li><code>ch</code>: largura do caractere “0”. Perfeita para limitar linhas de texto (<code>65ch</code>).</li>
    </ul>

    <template #exemplo>
      <BlocoCodigo linguagem="css" :codigo="exemplo" />
    </template>

    <template #lab>
      <p>Converta uma medida para px. Troque o valor de 1rem para ver o efeito de a pessoa mudar a fonte do navegador.</p>
      <LabUnidades />
    </template>

    <template #resposta>
      <p>
        <code>px</code> é um valor fixo: 16px são 16px, não importa o que a pessoa configure. Já <code>rem</code> é
        uma <em>proporção</em> da fonte do elemento raiz (<code>&lt;html&gt;</code>), e essa fonte, quando não foi
        sobrescrita em px, vem da configuração do navegador (padrão 16px).
      </p>
      <p>
        Se a pessoa muda o tamanho da fonte para, por exemplo, 24px, o <code>1rem</code> passa a valer 24px e tudo que
        está em rem é recalculado (<code>2rem</code> vira 48px). O texto em px ignora essa configuração. Por isso rem é
        a escolha acessível: respeita a preferência de quem enxerga mal.
      </p>
    </template>

    <template #fontes>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">MDN: &lt;length&gt;</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">MDN: font-size</a></li>
    </template>
  </SecaoLayout>
</template>
