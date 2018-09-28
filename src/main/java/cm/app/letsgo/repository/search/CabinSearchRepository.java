package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Cabin;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Cabin entity.
 */
public interface CabinSearchRepository extends ElasticsearchRepository<Cabin, Long> {
}
