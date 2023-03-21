# hubhugo
fetch content from multiple remote sources then build add sync main to development action


{{ with resources.GetRemote "https://dindinet.pockethost.io/api/collections/posts/records?perPage=500" }} 
  {{ with .Content | unmarshal }}
    {{ range .items }}
      {{ $post := dict 
        "slug" .slug
        "title" .title
        "heroimg" .heroImg
        "photos" .jphotos
      }}
      //"content" .content
      {{ $filename := printf "posts/%s.md" (urlize .slug) }}
      {{ $file := dict }}
      {{ if eq $format "json" }}
        {{ $string := print (jsonify $post) "\n " .content }}
        {{ $file = $string | resources.FromString $filename }}
      {{ else }}
        {{ $yaml_template := resources.Get "post.yaml" }}
        {{ $file = $yaml_template | resources.ExecuteAsTemplate $filename $post }}
      {{ end }}
      {{ $output := $file.RelPermalink }}
    {{ end }}
  {{ end }}
{{ end }}
