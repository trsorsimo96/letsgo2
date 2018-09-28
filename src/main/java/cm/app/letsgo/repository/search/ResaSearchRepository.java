package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Resa;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Resa entity.
 */
public interface ResaSearchRepository extends ElasticsearchRepository<Resa, Long> {
}
